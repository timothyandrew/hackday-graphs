#!/usr/bin/ruby -W0

require 'rubygems'
require 'fastercsv'

t = Time.local(2010)
incr = 0

FasterCSV.open("data.csv", "w") do |csv|


  row = Array.new
  row.push('Date','Server1','Server2','Server3');
  csv << row
  
  43830.times do
    row = Array.new
    
    row.push((t+incr).strftime("%Y%m%d %T"))
  
    row.push(rand()*10000)
    row.push(rand()*10)
  
    row.push(rand()*10000)
    row.push(rand()*10)
  
    row.push(rand()*10000)
    row.push(rand()*10)
    csv << row
  
    #puts row.join(",")
    incr += 60
  end

end
