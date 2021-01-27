def add_one(n):
    return n + 1

def add_five(n):
    return n + 5

def double(n):
    return n * n

def test_add_one():
    assert add_one(11) == 10

def test_add_five():
    assert add_five(11) == 16

def test_double():
    assert double(11) == 22