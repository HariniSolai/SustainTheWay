# from openai import OpenAI
# git pull
# git status
# git add .
# git commit -m "message"
# git push

from openai import OpenAI

# client = OpenAI(
#   api_key="sk-proj-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"
# )

# completion = client.chat.completions.create(
#   model="gpt-4o-mini",
# #   store=True,
#   messages=[
#     {"role": "user", "content": "write a haiku about ai"}
#   ]
# )

# print(completion.choices[0].message['content'])
from openai import OpenAI
client = OpenAI()

completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {
            "role": "user",
            "content": "Write a haiku about recursion in programming."
        }
    ]
)

print(completion.choices[0].message)