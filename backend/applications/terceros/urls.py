from .views import TerceroViewSet, ViewTerceroViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()

router.register(r'api/terceros', TerceroViewSet, basename='terceros')
router.register(r'api/vista/terceros', ViewTerceroViewSet, basename='vista-terceros')

urlpatterns = router.urls
