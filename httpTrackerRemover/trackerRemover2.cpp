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
	string st;
	bool flag=false;
	int lineCounter=0;
	fstream f;
	string filename;
	filename="test.html";
	f.open(filename.c_str());
	ofstream myfile;
	myfile.open ("activity0e1d.html");
	while(f>>st)
	{
		if(st=="ROHIT-->")
		{
			continue;
		}
		
		myfile <<st<<" ";
	}
  	myfile.close();
	cout<<"done";
	//remove "" from the output by replace all command
        
}

    
