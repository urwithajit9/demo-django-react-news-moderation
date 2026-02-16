from rest_framework.routers import DefaultRouter
from .views import  NewsFeedbackViewSet, NewsViewSet

# Initialize the router
router = DefaultRouter()

# Register the ArticleViewSet with the router
router.register(r'news',NewsViewSet,basename='news')
router.register(r'newsfeedback',  NewsFeedbackViewSet, basename='newsfeedback')

# The router automatically generates all the CRUD routes
urlpatterns = router.urls
