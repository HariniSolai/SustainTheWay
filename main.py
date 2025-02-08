// git pull
// git status
// git add .
// git commit -m "message"
// git push

from openai import OpenAI

client = OpenAI(
  api_key="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"
)

completion = client.chat.completions.create(
  model="gpt-4o-mini",
  store=True,
  messages=[
    {"role": "user", "content": "write a haiku about ai"}
  ]
)

print(completion.choices[0].message)
