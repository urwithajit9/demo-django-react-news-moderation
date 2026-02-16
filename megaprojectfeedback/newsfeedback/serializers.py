from rest_framework import serializers
from .models import NewsFeedback, News

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = "__all__"
        read_only_fields = ["id"]

class NewsFeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsFeedback
        fields = ['id', 'title', 'publication_date', 'source_name', 'feedback', 'ismegaproject', 'contentstatus']
