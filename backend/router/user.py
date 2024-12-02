import requests
from fastapi import APIRouter
from fastapi.responses import JSONResponse
from pydantic import BaseModel


user_router = APIRouter(prefix="/user", tags=["Users"])


class DataModel(BaseModel):
    amount: str
    currency: str


data1 = DataModel(amount="199", currency="USDT")
data2 = DataModel(amount="349", currency="USDT")
data3 = DataModel(amount="499", currency="USDT")
data4 = DataModel(amount="99", currency="USDT")

# @user_router.get("/some")
# async def send_email():
#     response = requests.post(
#         "https://api.whitepay.com/private-api/crypto-orders/1c025f2a-ac67-4423-9d7b-94579c5e33d9",
#         json=json_data,
#         headers={
#             "Authorization": "Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe",
#             "Content-Type": "application/json",
#         },
#     )

#     return JSONResponse(content=response.json())

@user_router.get("/some1")
async def some1_post():
    response = requests.post(
        "https://api.whitepay.com/private-api/crypto-orders/25k",
        json=data1.dict(),
        headers={
            "Authorization": "Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe",
            "Content-Type": "application/json",
        },
    )

    return JSONResponse(content=response.json())


@user_router.get("/some2")
async def some2_post():
    response = requests.post(
        "https://api.whitepay.com/private-api/crypto-orders/50k",
        json=data2.dict(),
        headers={
            "Authorization": "Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe",
            "Content-Type": "application/json",
        },
    )

    return JSONResponse(content=response.json())


@user_router.get("/some3")
async def some3_post():
    response = requests.post(
        "https://api.whitepay.com/private-api/crypto-orders/100k",
        json=data3.dict(),
        headers={
            "Authorization": "Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe",
            "Content-Type": "application/json",
        },
    )

    return JSONResponse(content=response.json())



@user_router.get("/some4")
async def some4_post():
    response = requests.post(
        "https://api.whitepay.com/private-api/crypto-orders/10k",
        json=data4.dict(),
        headers={
            "Authorization": "Bearer D8SqBILcivBK7FvHam85yAMZdcVdhNMenWFgBFMe",
            "Content-Type": "application/json",
        },
    )

    return JSONResponse(content=response.json())
