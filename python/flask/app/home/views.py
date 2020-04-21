from . import home
import asyncio
import websockets


@home.route("/")
def index():
    return "<h1 style='color:blue'>前台</h1>"


# # client
# async def test("/test"):
#     async with websockets.connect("/test") as websocket
#         await websocket.send("111111")
#         await websocket.recv()

# asyncio.get_event_loop().run_until_complete(
#     hello('ws://localhost:8765'))




# # server
async def echo(websocket, path):
    async for message in websocket:
        await websocket.send(message+'1111')


start_server=websockets.serve(echo, 'localhost', 8765)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
