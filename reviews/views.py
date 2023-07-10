from rest_framework import generics, viewsets
from .models import Review
from .serializers import ReviewSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    

# class CourseViewSet(viewsets.ModelViewSet):
#     queryset = Course.objects.all()
#     serializer_class = CourseSerializer

#     def list(self, request):
#         teachers = Teacher.objects.filter(course=request.user)
#         print(teachers)
#         groups = user_stat.groups.all()
#         print(groups)
#         tests = get_all_tests(groups)
#         tests_serializer = self.serializer_class(tests, many=True)
#         return Response(tests_serializer.data)
