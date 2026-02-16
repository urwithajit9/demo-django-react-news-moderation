from django.contrib import admin
from django.utils.html import format_html
from .models import News, NewsFeedback


# -----------------------------
# News Admin
# -----------------------------


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "source_name",
        "publication_date",
        "short_content",
        "news_link",
    )

    list_filter = (
        "source_name",
        "publication_date",
    )

    search_fields = (
        "title",
        "source_name",
        "content",
    )

    ordering = ("-publication_date",)
    date_hierarchy = "publication_date"

    list_per_page = 25

    readonly_fields = ("id",)

    fieldsets = (
        ("Basic Information", {"fields": ("title", "source_name", "publication_date")}),
        ("Article Details", {"fields": ("news_url", "content")}),
        (
            "System Info",
            {
                "fields": ("id",),
            },
        ),
    )

    def short_content(self, obj):
        return obj.content[:75] + "..." if len(obj.content) > 75 else obj.content

    short_content.short_description = "Content Preview"

    def news_link(self, obj):
        return format_html('<a href="{}" target="_blank">Open</a>', obj.news_url)

    news_link.short_description = "URL"


# -----------------------------
# NewsFeedback Admin
# -----------------------------


@admin.register(NewsFeedback)
class NewsFeedbackAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "source_name",
        "publication_date",
        "ismegaproject",
        "contentstatus",
        "short_feedback",
    )

    list_filter = (
        "ismegaproject",
        "contentstatus",
        "publication_date",
        "source_name",
    )

    search_fields = (
        "title",
        "source_name",
        "feedback",
    )

    ordering = ("-publication_date",)

    date_hierarchy = "publication_date"

    list_per_page = 25

    readonly_fields = ("id",)

    fieldsets = (
        ("Article Info", {"fields": ("title", "source_name", "publication_date")}),
        ("Moderation Data", {"fields": ("feedback", "ismegaproject", "contentstatus")}),
        (
            "System Info",
            {
                "fields": ("id",),
            },
        ),
    )

    def short_feedback(self, obj):
        return obj.feedback[:75] + "..." if len(obj.feedback) > 75 else obj.feedback

    short_feedback.short_description = "Feedback Preview"

    actions = ["mark_as_approved", "mark_as_flagged"]

    def mark_as_approved(self, request, queryset):
        queryset.update(contentstatus="APPROVED")

    mark_as_approved.short_description = "Mark selected as APPROVED"

    def mark_as_flagged(self, request, queryset):
        queryset.update(contentstatus="FLAGGED")

    mark_as_flagged.short_description = "Mark selected as FLAGGED"
