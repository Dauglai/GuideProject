from django.contrib import admin
from .models import Course, Teacher, Review
# Register your models here.
admin.site.register(Review)
admin.site.register(Teacher)
admin.site.register(Course)