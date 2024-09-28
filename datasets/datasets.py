import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

movies_df = pd.read_csv("datasets/tmdb_5000_movies.csv")

print(movies_df)