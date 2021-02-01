#include<bits/stdc++.h>
using namespace std;

int main()
{
    std::string path = "C:\Users\editor\Desktop\httptracker Remover";
    for (const auto & entry : fs::directory_iterator(path))
        std::cout << entry.path() << std::endl;
}
