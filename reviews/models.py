from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Teacher(models.Model):
    full_name = models.CharField('ФИО', max_length=100)

    def __str__(self):
        return self.full_name


class Course(models.Model):
    name = models.CharField('Название курса', max_length=100)
    is_online = models.BooleanField(default=True)
    description = models.TextField(max_length=1000, null=True, blank=True)
    difficulty = models.PositiveIntegerField('Сложность')
    teacher = models.ManyToManyField('Teacher')
    number_course = models.PositiveIntegerField(
        'Номер курса',
        default=1,
        validators=[
            MaxValueValidator(4),
            MinValueValidator(1)
        ])

    def __str__(self):
        return self.name


class Review(models.Model):
    overall_score = models.PositiveIntegerField(
        'Общая оценка',
        default=1,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    interest = models.PositiveIntegerField(
        'Интерес к предмету',
        default=1,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    benefit = models.PositiveIntegerField(
        'Польза от предмета',
        default=1,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    understanding = models.PositiveIntegerField(
        'Общедоступность курса',
        default=1,
        validators=[
            MaxValueValidator(5),
            MinValueValidator(1)
        ])
    explanation = models.TextField('Развернутая оценка', max_length=1000, null=True, blank=True)
    course = models.ForeignKey('Course', on_delete=models.CASCADE)

    def __str__(self):
        return self.course.name

