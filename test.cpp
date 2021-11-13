#include<bits/stdc++.h>

using namespace std;

int my_lower_bound(vector<int>&v, int target){
    int n = v.size();
    int l = 0, r = n;

    while(l < r){
        int mid = l + (r-l)/2;
        if(v[mid] < target) l = mid+1;
        else if(v[mid] > target) r = mid;
        else{  // 由于要找到第一个不小于target的，因此在相等时应该压缩右边界
            r = mid;
        }
    }

    if(l == n || v[l] != target) return -1;
    return l;
}

int my_upper_bound(vector<int>&v, int target){
    int n = v.size();
    int l = 0, r = n;
    while(l < r){
        int mid = l + (r-l)/2;
        if(v[mid] < target) l = mid+1;
        else if(v[mid] > target) r = mid;
        else{  // 在相等时候，应该压缩左边界
            l = mid+1;
        }
    }

    // 返回的l是第一个比target大的, l-1是最后一个小于等于target的
    if(l == 0 || v[l-1] != target) return -1;  // 所有元素都比target大，那么 l=r=0
    return l-1;
}