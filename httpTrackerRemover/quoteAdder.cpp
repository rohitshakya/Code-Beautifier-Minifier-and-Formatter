/*
 * Author : Rohit Shakya
 * Date   : February-2021
 * Compiler : g++ 5.1.0
 * flags    : -std=c++14
 * Title	: HTT Tracker remover by line counter
 */
 
#include<bits/stdc++.h>
using namespace std;
int main()
{	
	char ch;
	int lineCounter=0;
	fstream f;
	string filename;
	filename="filewithnames.txt";
	f.open(filename.c_str());
	ofstream myfile;
	myfile.open ("filewithnamesformatted.txt");
	while(f>>ch)
	{
		if(ch==',')
		{
			
			myfile <<"";
		}
		myfile <<ch;
	}
  	myfile.close();
	cout<<"done";
	//remove "" from the output by replace all command
        
}

    
