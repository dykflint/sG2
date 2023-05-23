import csv

# Open the word file and read in the words, preserving their order
with open('a1words.txt', 'r') as f:
    words = [line.strip() for line in f]

# Open the variants file and read in the variants for each word, preserving the order
with open('variants.txt', 'r') as f:
    variants = [line.strip().split(',') for line in f]

# Flatten the variants into a single list and remove duplicates
variant_words = list(set([variant for word_variants in variants for variant in word_variants]))

# Add the variant words to the list of words
words += variant_words

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
word_sentence_dict = {word: [] for word in words}

# Loop through the sentences and find the ones that contain the target words
for sentence_num, sentence in enumerate(sentences):
    for word_variants in variants:
        # Check if any variant of the word appears on its own
        for variant in word_variants:
            if (' ' + variant.strip() + ' ') in (' ' + sentence.replace(',', ' ').replace('?', ' ').replace('!', ' ').replace('.', ' ').replace(':', ' ') + ' '):
                if str(sentence_num+1) + '. ' + sentence not in word_sentence_dict[word_variants[0]]:
                    word_sentence_dict[word_variants[0]].append(str(sentence_num+1) + '. ' + sentence)

# Write the word/sentence pairs to a CSV file, preserving the order of the words
with open('output.csv', 'w', newline='') as f:
    writer = csv.writer(f)
    writer.writerow(['Word', 'Sentences'])
    for word in words:
        sentences = word_sentence_dict[word]
        writer.writerow([word, '\n'.join(sentences)])

