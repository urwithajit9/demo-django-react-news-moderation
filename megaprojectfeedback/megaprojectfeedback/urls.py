from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Admin route
    path('api/', include('newsfeedback.urls')),  # Include the API URLs for your app
]
