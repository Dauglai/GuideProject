"""
URL configuration for GuideProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from articles.views import ArticleViewSet, TopicViewSet
from reviews.views import ReviewViewSet, CourseViewSet


router = routers.SimpleRouter()
router.register(r'review', ReviewViewSet)
router.register(r'article', ArticleViewSet)
router.register(r'course', CourseViewSet)
router.register(r'topic', TopicViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)), #http://127.0.0.1:8000/api/v1/review/
                                           #http://127.0.0.1:8000/api/v1/article/
                                           # http://127.0.0.1:8000/api/v1/course/
                                           # http://127.0.0.1:8000/api/v1/topic/


#    path('api/v1/reviewlist/', ReviewViewSet.as_view({'get': 'list'})),
#   path('api/v1/reviewlist/<int:pk>/', ReviewViewSet.as_view({'put': 'update'})),

]
