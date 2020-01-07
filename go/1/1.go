package main

import "fmt"

func isUnique(str string) bool {
	m := make(map[string]bool)
	for i := 0; i < len(str); i++ {
		if m[string(str[i])] {
			return false
		}
		m[string(str[i])] = true
		// apparently i have to convert the byte to string here?
	}
	return true
}

func main() {
	ans := isUnique("heyo")
	fmt.Println(ans)
}
