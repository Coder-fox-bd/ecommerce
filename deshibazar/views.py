from django.shortcuts import render

# Create your views here.
def home(request):
   change_nav = 1
   return render(request, 'deshibazar/index.html', {'change_nav': change_nav}) 