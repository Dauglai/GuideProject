from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from GuideProject import settings

from articles.views import ArticleViewSet, TopicViewSet
from reviews.views import ReviewViewSet, CourseViewSet
from main.views import VKNewsAPIView
from main.views import index, index_id


router = routers.SimpleRouter()
router.register(r'review', ReviewViewSet)
router.register(r'article', ArticleViewSet)
router.register(r'course', CourseViewSet)
router.register(r'topic', TopicViewSet)

urlpatterns = [
    path('', index),
    path('main', index),
    path('reviews', index),
    path('reviews/course/<id>', index_id),
    path('map', index),
    path('articles', index),
    path('articles/article/<id>', index_id),
    path('admin/', admin.site.urls),
    path('api/v1/main/', VKNewsAPIView.as_view()),
    path('api/v1/', include(router.urls)),
]

urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

