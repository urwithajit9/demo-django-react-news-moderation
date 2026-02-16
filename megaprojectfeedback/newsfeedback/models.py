from django.db import models


class News(models.Model):
    title = models.CharField(max_length=255)  # Title of the article
    news_url = models.URLField(default="www.megaproject.com", max_length=500)
    publication_date = models.DateField()  # Date when the article was published
    source_name = models.CharField(max_length=255)  # Source of the article
    content = models.TextField(max_length=100000, default="Content not found")


class NewsFeedback(models.Model):
    title = models.CharField(max_length=255)  # Title of the article
    publication_date = models.DateField()  # Date when the article was published
    source_name = models.CharField(max_length=255)  # Source of the article
    feedback = models.TextField(blank=True)  # Feedback on the article
    ismegaproject = models.CharField(max_length=10, default='Yes')
    contentstatus = models.CharField(max_length=50, default='Clean')

    def __str__(self):
        return self.title  # String representation of the model

    class Meta:
        ordering = ['-publication_date']  # Order by publication_date (newest first)
