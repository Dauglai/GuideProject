from rest_framework import serializers
from .models import Review, Teacher, Course


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
        # depth = 2


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(source="review_set", many=True, read_only=True)

    class Meta:
        model = Course
        fields = '__all__'
        depth = 1

