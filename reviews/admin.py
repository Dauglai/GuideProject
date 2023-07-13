from django.contrib import admin
import this
from .models import Course, Teacher, Review, Discipline, FormEducation
admin.site.register(Review)
admin.site.register(Teacher)
admin.site.register(Course)
admin.site.register(Discipline)
admin.site.register(FormEducation)