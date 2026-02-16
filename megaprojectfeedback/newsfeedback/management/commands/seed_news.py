import random
from datetime import date, timedelta
from django.core.management.base import BaseCommand
from faker import Faker
from newsfeedback.models import News


class Command(BaseCommand):
    help = "Populate News model with dummy data"

    def add_arguments(self, parser):
        parser.add_argument(
            "--total",
            type=int,
            default=20,
            help="Number of dummy news articles to create",
        )

    def handle(self, *args, **kwargs):
        fake = Faker()
        total = kwargs["total"]

        sources = [
            "BBC News",
            "Reuters",
            "TechCrunch",
            "CNN",
            "Al Jazeera",
            "The Guardian",
        ]

        created_count = 0

        for _ in range(total):
            News.objects.create(
                title=fake.sentence(nb_words=8),
                news_url=fake.url(),
                publication_date=date.today() - timedelta(days=random.randint(0, 365)),
                source_name=random.choice(sources),
                content=fake.text(max_nb_chars=2000),
            )
            created_count += 1

        self.stdout.write(
            self.style.SUCCESS(f"Successfully created {created_count} news articles")
        )
