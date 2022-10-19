from .views import TerceroViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()

router.register(r'api/terceros', TerceroViewSet, basename='terceros')

urlpatterns = router.urls
