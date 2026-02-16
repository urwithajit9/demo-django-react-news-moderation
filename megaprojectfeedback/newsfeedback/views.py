from rest_framework import viewsets
from .models import NewsFeedback, News
from .serializers import NewsFeedbackSerializer, NewsSerializer


class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


# ViewSet for handling all CRUD operations
class NewsFeedbackViewSet(viewsets.ModelViewSet):
    queryset = NewsFeedback.objects.all()
    serializer_class = NewsFeedbackSerializer
