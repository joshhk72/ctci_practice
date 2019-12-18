# see if all characters in a string are unique

# with a hash
def uniq_str(str)
  hash = {}
  str.each_char do |char|
    return false if hash.has_key?(char)
    hash[char] = true;
  end
  true
end