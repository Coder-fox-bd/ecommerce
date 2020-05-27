from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class HomeView(TemplateView):
   template_name = 'deshibazar/index.html'

class BlogDetailView(TemplateView):
   template_name = 'deshibazar/blog-details.html'


class BlogView(TemplateView):
   template_name = 'deshibazar/blog.html'


class CheckoutView(TemplateView):
   template_name = 'deshibazar/checkout.html'


class ContactView(TemplateView):
   template_name = 'deshibazar/contact.html'


class ItemDetailsView(TemplateView):
   template_name = 'deshibazar/shop-details.html'


class ShopView(TemplateView):
   template_name = 'deshibazar/shop-grid.html'


class ShopCartView(TemplateView):
   template_name = 'deshibazar/shoping-cart.html'


def handler404(request, exception):
   return render(request, 'deshibazar/error_404.html', status=404)


def handler500(request):
   return render(request, 'deshibazar/error_404.html', status=500)
