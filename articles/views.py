from rest_framework import generics, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Article, Topic
from .serializers import ArticleSerializer, TopicSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
