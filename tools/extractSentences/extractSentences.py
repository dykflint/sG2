import csv

# Define function to read in text file and return a list of sentences
def read_text_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        # Split text file into sentences using a period followed by a space as the delimiter
        sentences = f.read().split('. ')
    return sentences

# Define function to search for words in a list of sentences and return a dictionary with the words as keys and the sentences they appear in as values
def search_for_words(words, sentences):
    word_sentences = {}
    for word in words:
        # Initialize list of sentences for each word
        word_sentences[word] = []
        # Iterate over each sentence in the list of sentences
        for sentence in sentences:
            # Check if the word appears in the sentence
            if word in sentence:
                # If it does, append the sentence to the list of sentences for the word
                word_sentences[word].append(sentence)
    return word_sentences

# Define function to write dictionary to csv file
def write_to_csv(filename, word_sentences):
    with open(filename, 'w', newline='', encoding='utf-8') as f:
        writer = csv.writer(f)
        # Write header row to csv file
        writer.writerow(['Word', 'Sentences'])
        # Write each word and its list of sentences to the csv file
        for word in word_sentences:
            sentences = '\n'.join(word_sentences[word])
            writer.writerow([word, sentences])

# Define array of words to search for
words_to_search = ['word1', 'word2', 'word3']

# Define filename of text file to search
text_filename = 'book.txt'

# Read in text file and split into sentences
sentences = read_text_file(text_filename)

# Search for words in the list of sentences
word_sentences = search_for_words(words_to_search, sentences)

# Define filename of output csv file
output_filename = 'output.csv'

# Write dictionary to csv file
write_to_csv(output_filename, word_sentences)
