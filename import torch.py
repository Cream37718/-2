import torch

batch = 32
n = 10
m = 20
p = 30

tensor_1 = torch.rand((batch, n, m))
tensor_2 = torch.rand((batch, m, p))

print(f"{tensor_1.size()}")
print(f"{tensor_2.size()}")

#Batch Metrix Muitifunction: bmm
out_bmm = torch.bmm(tensor_1,tensor_2)
print(f"out_bmm:,{out_bmm.size()}")
