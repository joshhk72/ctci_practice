# see if two strings are permutations of each other

# O(n^2) worst case as ruby uses quick sort (n is length of bigger string)
def permutations?(str1, str2)
  return false if str1.size != str2.size
  str1.chars.sort == str2.chars.sort
end

def permutations?(str1, str2)
  return false if str1.size != str2.size
  hash = Hash.new(0);

  str1.each_char do |char|
    hash[char] += 1
  end

  str2.each_char do |char|
    hash[char] -= 1
  end

  !hash.values.any? { |val| val != 0 }
end