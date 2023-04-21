#include<stdio.h>
#include<string.h>
int main()
{   int i=0;
    char name[50] , lname[50];
    printf("\n Enter First Name : ");
    gets(name);
    printf("\n Enter Last Name : ");
    gets(lname);

    while(name[i]!='\0')
    {
        if(i==0)
        printf("%c.",name[i]);
        while(name[i]==' ')
        {
            printf("%c.",name[i+1]);
            break;
        }
        i++;
    }
    printf(" %s",lname);
    return 0;
}
