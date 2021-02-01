/*
 * Author : Rohit Shakya
 * Date   : February-2021
 * Compiler : g++ 5.1.0
 * flags    : -std=c++14
 * Title	: HTTP Tracker Remover 
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
	filename="activity0e1d.html";
	f.open(filename.c_str());
	ofstream myfile;
	myfile.open ("test.html");
	while(f>>st)
	{
		if(st=="-->")
		{
			flag=false;
			myfile <<" ROHIT";
		}
		if(st=="<!--") 
		{
			flag=true;
		}
		if(flag) 
		{
			continue;
		}
		myfile <<st<<" ";
	}
  	myfile.close();
	cout<<"done";
	//remove "" from the output by replace all command
        
}

    
