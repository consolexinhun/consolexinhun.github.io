---
categories: 
  - 随笔
  - 操作系统
title: LFU
date: 2021-12-20 21:52:26
permalink: /pages/1f0d76/
tags: 
  - 
---

内存管理之页面置换算法

### LFU

least frequently used

:::note
当页面的缓存满了时，选择访问频次最低的页面替换掉
:::

```cpp
#include<bits/stdc++.h>

using namespace std;

class LFUCache {
    private:
        int cap; // 容量
        int min_freq; // 最小频率
        unordered_map<int, pair<int, int>> key_val_freq; // 键-频率映射
        unordered_map<int, list<int>> freq_key_list; // 频率-键链表映射
        unordered_map<int, list<int>::iterator> key_iter; // 链表迭代器映射

    public:
        LFUCache(int capacity): cap(capacity) {
            min_freq = 0;
        }

        int get(int key) {
            printf("the key %d, value = ", key);
            if(key_val_freq.find(key) == key_val_freq.end()) {
                return -1;
            }
            int value = key_val_freq[key].first;
            int freq = key_val_freq[key].second;

            // 这个键对应的频率需要加一
            key_val_freq.erase(key);
            key_val_freq[key] = {value, freq+1};

            // 该频率需要移除这个key，频率加一需要添加这个key
            list<int>::iterator it = key_iter[key];
            freq_key_list[freq].erase(it);

            freq_key_list[freq+1].push_back(key);
            key_iter[key] = --freq_key_list[freq+1].end();

            // 更新最小频率，如果最小频率中没有元素了，就是刚刚更新的恰好是频率最小的元素，并且只有一个
            if(freq_key_list[min_freq].size() == 0) {
                min_freq++; // 
            }
            return value;
        }

        void put(int key, int value) {
            if(cap <= 0) {
                return ;
            }
            printf("put key=%d value=%d\n", key, value);
            if(get(key) != -1) {
                key_val_freq[key].first = value;
                return ;
            }

            if(key_val_freq.size() >= cap) { // 删除最不常用的
                int remove_key = freq_key_list[min_freq].front();
                key_val_freq.erase(remove_key);
                key_iter.erase(remove_key);
                freq_key_list[min_freq].pop_front();
            }

            key_val_freq[key] = {value, 1};
            freq_key_list[1].push_back(key);
            key_iter[key] = --freq_key_list[1].end();

            min_freq = 1;
        }
};

/**
 * 
 * */

int main() {
    LFUCache *lfu = new LFUCache(2);
    lfu->put(2, 1);
    lfu->put(1, 1);
    lfu->put(2, 3);
    lfu->put(4, 1);
    cout<<lfu->get(1)<<endl;
    cout<<lfu->get(2)<<endl;

    return 0;
}
```


### LRU

least recently used

:::note
当页面的缓存满了时，选择最久没有访问的页面替换掉
:::


```cpp

```