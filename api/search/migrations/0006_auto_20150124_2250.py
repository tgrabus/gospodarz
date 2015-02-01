# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search', '0005_auto_20141222_1155'),
    ]

    operations = [
        migrations.CreateModel(
            name='FarmerProduct',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('picture', models.ImageField(null=True, upload_to='', blank=True)),
                ('farmer', models.ForeignKey(to='search.Farmer')),
                ('product', models.ForeignKey(to='search.Product')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.CreateModel(
            name='ProductCategory',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, auto_created=True, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='localization',
            name='street',
        ),
        migrations.RemoveField(
            model_name='product',
            name='category',
        ),
        migrations.DeleteModel(
            name='Category',
        ),
        migrations.RemoveField(
            model_name='product',
            name='farmer',
        ),
        migrations.AddField(
            model_name='product',
            name='picture',
            field=models.ImageField(null=True, upload_to='', blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='product',
            name='product_category',
            field=models.ForeignKey(default=0, to='search.ProductCategory'),
            preserve_default=False,
        ),
    ]
