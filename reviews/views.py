from rest_framework import generics, viewsets
from .models import Review
from .serializers import ReviewSerializer


class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

    def post(self, request):
        serializer = ReviewSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'reviews': serializer.data})

    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({'error': 'Method PUT does not exists'})
        try:
            instance= Review.objects.get(pk=pk)
        except:
            return Response({'error': 'Object does not exists'})

        serializer = ReviewSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'reviews': serializer.data})

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)
        if not pk:
            return Response({'error': 'Method PUT does not exists'})
        review = Review.objects.get(pk=pk)
        review.delete()
        return Response({'reviews': 'delete review  ' + str(pk)})
