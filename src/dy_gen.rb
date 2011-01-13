#!/usr/bin/ruby -W0

require 'rubygems'
require 'fastercsv'

t = Time.local(2010)
incr = 0

FasterCSV.open("data.csv", "w") do |csv|


  row = Array.new
  row.push('Date','Server1','Server2','Server3');
  csv << row
  
  365.times do
    row = Array.new
    
    row.push((t+incr).strftime("%Y%m%d"))
  
    #row.push((rand(10)).to_s() + ";" + (rand()*10000).to_s() + ";" + (rand(10)).to_s());
    #row.push((rand(10)).to_s() + ";" + (rand()*10000).to_s() + ";" + (rand(10)).to_s());
    #row.push((rand(10)).to_s() + ";" + (rand()*10000).to_s() + ";" + (rand(10)).to_s());

    row.push(rand()*10000)
    #row.push(rand(10))  
    
    row.push(rand()*10000)
    #row.push(rand(10))
#   
    row.push(rand()*10000)
    #row.push(rand(10))
    csv << row
  
    #puts row.join(",")
    incr += 86400
  end

end
