from rest_framework.views import APIView
from rest_framework.response import Response
import vk_api


class VKNewsAPIView(APIView):

    def get(self, request):
        # group_id = '-6214974'
        group_id = '-22941070'
        token = '543cf14d543cf14d543cf14d555728197e5543c543cf14d30927c474ea90bdd30b54927'
        session = vk_api.VkApi(token=token)
        wall_content = session.method(
            "wall.get",
            {'owner_id': group_id,
            'access_token': token,
            'count': 10,
            'offset': 0})
        return Response(wall_content)
