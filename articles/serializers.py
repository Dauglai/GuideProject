from rest_framework import serializers
from .models import Article, Topic


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
        depth = 1


class TopicSerializer(serializers.ModelSerializer):

    # articles = ArticleSerializer(source="article_set", many=True, read_only=True)
    class Meta:
        model = Topic
        fields = '__all__'