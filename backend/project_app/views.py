from django.shortcuts import render

def coming_soon(request):
    return render(request, 'coming_soon.html')



def custom_404(request, exception):
    return render(request, '404.html', status=404)