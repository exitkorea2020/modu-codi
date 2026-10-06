import os

from openai import APIConnectionError, OpenAI

BASE_URL = os.getenv("LLM_SERVER_BASE_URL")
MODEL = "liquid/lfm2.5-1.2b"

if not BASE_URL:
    print("오류: LLM_SERVER_BASE_URL이 설정되지 않았습니다.")
    raise SystemExit(1)

client = OpenAI(
    base_url=BASE_URL,
    api_key="lm-studio",
)

print("로컬 AI Mini Agent를 시작합니다.")
print("종료하려면 exit 또는 quit을 입력하세요.")

while True:
    question = input("\n나: ").strip()

    if question.lower() in ("exit", "quit"):
        print("Mini Agent를 종료합니다.")
        break

    if not question:
        print("질문을 입력해 주세요.")
        continue

    try:
        response = client.chat.completions.create(
            model=MODEL,
            messages=[
                {
                    "role": "system",
                    "content": "당신은 친절한 한국어 AI 도우미입니다. 답변은 두 문장 이내로 쉽게 작성하세요.",
                },
                {
                    "role": "user",
                    "content": question,
                },
            ],
        )

        answer = response.choices[0].message.content
        print(f"AI: {answer}")

    except APIConnectionError:
        print("오류: LM Studio 서버에 연결할 수 없습니다.")
        print("LM Studio의 Local Model API 서버가 켜져 있는지 확인하세요.")

    except Exception as error:
        print("오류: AI 응답을 받지 못했습니다.")
        print(error)