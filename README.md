#

## Starting form scratch
 git rm -r --cached node_modules  
.gitignore  
**/node_modules  
mkdir websiteName  



cd webSiteName  
sanity init --coupon sonny2022  

npx create-next-app --example with-tailwindcss web  

sanity init --coupon sonny2022  

## todo


emails
[]transition  
[]promotional
[]news letter  


[]landing pages 1
[]landing pages 1

remove node_modules  add to .gitignore:  
node_modules/  

git rm -r --cached .
git add .
git commit -m "remove gitignore files"
git push

sanity
project

## production
turn on cd in lib  
set up the correct cores   

## Netlify
npm install -D @netlify/plugin-nextjs@latest  

netlify.toml:  

[[plugins]]  
package = "@netlify/plugin-nextjs"  

[build]
publish = ".next"