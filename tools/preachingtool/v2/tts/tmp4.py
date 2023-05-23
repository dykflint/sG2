def get_sentences(file_path):
    sentences = []
    with open(file_path, 'r') as file:
        for line in file:
            sentence = line.strip()
            # remove special characters from sentence
            sentence = ''.join(char for char in sentence if char.isalnum() or char.isspace())
            sentences.append(sentence)
    return sentences

sentences_arr = get_sentences("a1sentences")
print(sentences_arr)
