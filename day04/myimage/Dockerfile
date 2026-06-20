#cài image nginx từ hub docker
FROM nginx

#chỉ định thư mục làm việc mặc định khi start container; này là tùy chọn
WORKDIR /myapp

# đưa source vào container
COPY . /usr/share/nginx/html/

# nhận biết port private, ứng dụng, phía trong
EXPOSE 80

# docker build . -t img-html : lệnh tạo image từ dockerfile 
# (dấu chấm là đường dẫn chứa dockerfile)
# docker run -d -p 3001:80 --name cons-html img-html