from django.db import models


class Topic(models.Model):
    name = models.CharField('Тема статьи', max_length=255)

    def __str__(self):
        return self.name


class Article(models.Model):
    name = models.CharField('Название статьи', max_length=255)
    topic = models.ForeignKey('Topic', on_delete=models.CASCADE, null=True)
    text = models.TextField('Текст')

    def __str__(self):
        return self.name
