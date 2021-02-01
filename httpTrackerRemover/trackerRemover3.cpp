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
	string filename[]={"activity0a00.html","activity13fa.html",
"activity17c0.html",
"activity1d5e.html",
"activity1eb5.html",
"activity23d8.html",
"activity27fb.html",
"activity28c7.html",
"activity2f93.html",
"activity3108.html",
"activity33ed.html",
"activity35f6.html",
"activity36fc.html",
"activity3817.html",
"activity418e.html",
"activity45e6.html",
"activity47ff.html",
"activity535b.html",
"activity54f7.html",
"activity5983.html",
"activity59fb.html",
"activity5acc.html",
"activity61ef.html",
"activity6602.html",
"activity66db.html",
"activity6a7f.html",
"activity6bf5.html",
"activity6da6.html",
"activity739e.html",
"activity7880.html",
"activity7a41.html",
"activity7af3.html",
"activity81c8.html",
"activity875e.html",
"activity8d50.html",
};
	
	f.open(filename[0].c_str());
	ofstream myfile;
	myfile.open ("4aa1.html");
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

    
