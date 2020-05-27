from django.urls import path
from .views import (
    HomeView,
    BlogDetailView,
    BlogView,
    CheckoutView,
    ContactView,
    ItemDetailsView,
    ShopView,
    ShopCartView
)

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('blog-details', BlogDetailView.as_view(), name='blog_details'),
    path('blog', BlogView.as_view(), name='blog'),
    path('checkout', CheckoutView.as_view(), name='checkout'),
    path('contact', ContactView.as_view(), name='contact'),
    path('item-details', ItemDetailsView.as_view(), name='item_detail'),
    path('shop', ShopView.as_view(), name='shop'),
    path('shoping-cart', ShopCartView.as_view(), name='shoping_cart')
]