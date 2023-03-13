from django.db import models
from wagtail.images.api.fields import ImageRenditionField

from wagtail.api import APIField
from modelcluster.fields import ParentalKey

from wagtail.models import Page, Orderable
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel, InlinePanel
from wagtail.search import index


class HomePage(Page):
    body = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('body'),
    ]
    api_fields = [
        APIField('published_date'),
        APIField('body'),
        APIField('feed_image'),
        APIField('authors'),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]


class BlogIndexPage(Page):
    intro = RichTextField(blank=True)

    content_panels = Page.content_panels + [
        FieldPanel('intro')
    ]
    api_fields = [
        APIField('content_panels'),
    ]


class BlogPageAuthor(Orderable):
    page = models.ForeignKey('home.BlogPage', on_delete=models.CASCADE, related_name='authors')
    name = models.CharField(max_length=255)

    api_fields = [
        APIField('name'),
        APIField('page'),
    ]


class BlogPage(Page):
    published_date = models.DateTimeField()
    intro = models.CharField(max_length=250)
    body = RichTextField(blank=True)

    search_fields = Page.search_fields + [
        index.SearchField('intro'),
        index.SearchField('body'),
    ]

    content_panels = Page.content_panels + [
        FieldPanel('published_date'),
        FieldPanel('intro'),
        FieldPanel('body'),
        InlinePanel('gallery_images', label="Gallery images"),
    ]

    # Export fields over the API
    api_fields = [
        APIField('published_date'),
        APIField('body'),
        APIField('feed_image'),
        APIField('gallery_images'),
        # Adds information about the source image (eg, title) into the API
        APIField('feed_image'),
        # Adds a URL to a rendered thumbnail of the image to the API
        APIField('feed_image_thumbnail', serializer=ImageRenditionField('fill-100x100', source='feed_image')),
        APIField('authors'),  # This will nest the relevant BlogPageAuthor objects in the API response
    ]


class BlogPageGalleryImage(Orderable):
    page = ParentalKey(BlogPage, on_delete=models.CASCADE, related_name='gallery_images')
    image = models.ForeignKey(
        'wagtailimages.Image', on_delete=models.CASCADE, related_name='+'
    )
    caption = models.CharField(blank=True, max_length=250)

    panels = [
        FieldPanel('image'),
        FieldPanel('caption'),
    ]

