import tiktoken

encoder= tiktoken.encoding_for_model('gpt-4o')

print("Vocab size", encoder.n_vocab)
# Vocab size 200019 (200K unique tokens)


text= "The sample sentence"
tokens= encoder.encode(text)
print("Tokens", tokens)

# Tokens [976, 10176, 21872]

decoded= encoder.decode([976, 10176, 21872])
print("Decode of [976, 10176, 21872]: ",decoded)