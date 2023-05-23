import csv

# Open the word file and read in the words
with open('word_file.txt', 'r') as f:
    words = [line.strip() for line in f]

# Open the book file and read in the text
with open('book_file.txt', 'r') as f:
    text = f.read()

# Split the text into sentences
sentences = []
sentence = ''
for c in text:
    sentence += c
    if c in ['.', '?', '!']:
        sentences.append(sentence.strip())
        sentence = ''

# Create a dictionary to hold the word/sentence pairs
word_sentence_dict = {}

# Loop through the sentences and find the ones that contain the target words
for sentence_num, sentence in enumerate(sentences):
    for word in words:
        # Check if the word appears on its own
        if (' ' + word + ' ') in (' ' + sentence + ' '):
            if word not in word_sentence_dict:
                word_sentence_dict[word] = []
            word_sentence_dict[word].append(str(sentence_num+1) + '. ' + sentence)

# Write the word/sentence pairs to a CSV file
with open('output.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Word', 'Sentences'])
    for word in word_sentence_dict:
        sentences = word_sentence_dict[word]
        writer.writerow([word, '\n'.join(sentences)])

